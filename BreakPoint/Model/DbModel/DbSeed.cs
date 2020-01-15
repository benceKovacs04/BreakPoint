using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;

namespace BreakPoint.Model.DbModel
{
    public class DbSeed
    {
        public DbSeed()
        {
        }

        public static async void Initialize(IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

            List<User> testUsers = new List<User>
            {
                new User
                {
                    Email = "ali@gmail.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    RegistrationDate = DateTime.Now,
                    UserName = "Alika"
                },
                new User
                {
                    Email = "ali@g_indahouse_mail.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    RegistrationDate = DateTime.Now,
                    UserName = "AliG"
                },
                new User
                {
                    Email = "user3@email.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    RegistrationDate = DateTime.Now,
                    UserName = "AliGGG"
                }
            };

            foreach (var user in testUsers)
            {
                var result = await userManager.CreateAsync(user, "asD12_");
            
                if (!result.Succeeded)
                {
                    Console.WriteLine(result);
                }
            }
            
        }

    };
}
