using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;

namespace BreakPoint.Model.DbModel
{
    public class DbSeed
    {
        private IServiceProvider _serviceProvider;

        public DbSeed(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async void Initialise()
        {
            var context = _serviceProvider.GetRequiredService<BreakPointContext>();
            var userManager = _serviceProvider.GetRequiredService<UserManager<User>>();
          
            User user = new User()
            {
                Email = "testmail@gmail.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "TestUser2"
            };
             var x = await userManager.CreateAsync(user, "Testtestetasdasdf");
            var s = 4;
            
        }

    };
}
