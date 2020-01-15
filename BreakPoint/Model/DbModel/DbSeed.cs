using System;
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

        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<BreakPointContext>();
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            context.Database.EnsureCreated();

            User user1 = new User
            {
                Email = "ali@gmail.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Alika"
            };

            User user2 = new User
            {
                Email = "ali@g_indahouse_mail.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                RegistrationDate = DateTime.Now,
                UserName = "AliG"
            };

            userManager.CreateAsync(user1, "b3tu$zam");
            userManager.CreateAsync(user2, "Ali$33");
            
            //TODO figure out why only user2 is added to the table
        }

    };
}
