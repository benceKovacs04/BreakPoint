using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakPoint.Model.DbModel
{
    public class DbSeed
    {
        private BreakPointContext _context;

        public DbSeed(BreakPointContext context)
        {
            _context = context;
        }

        public void Initialise()
        {
            var users = new User[]
            {
                new User
                {
                    UserName = "TestUser1",
                    Email = "testemail@gmail.com",
                    Password = "hashedPassword1",
                    RegistrationDate = new DateTime(2020, 1, 1),
                   // Friends = new List<User>(),
                    Posts = new List<Post>()
                },
                new User
                {
                    UserName = "TestUser2",
                    Email = "testemail2@gmail.com",
                    Password = "hashedPassword2",
                    RegistrationDate = new DateTime(2020, 1, 2),
                  //  Friends = new List<User>(),
                    Posts = new List<Post>()
                },
                new User
                {
                    UserName = "TestUser3",
                    Email = "testemail3@gmail.com",
                    Password = "hashedPassword3",
                    RegistrationDate = new DateTime(2020, 1, 3),
                   // Friends = new List<User>(),
                    Posts = new List<Post>()
                }
            };

            var posts = new Post[]
            {
                new Post
                {
                    Content = "text content",
                    CreationTime = new DateTime(2020, 1, 1),
                    UserID = 1,
                    User = users[0]
                },

                new Post
                {
                    Content = "text content2",
                    CreationTime = new DateTime(2020, 1, 2),
                    UserID = 1,
                    User = users[0]
                },
            };

            users[0].Posts.Add(posts[0]);
            users[0].Posts.Add(posts[1]);

            foreach (var user in users)
            {
                _context.Users.Add(user);
            }
            _context.SaveChanges();

            foreach (var post in posts)
            {
                _context.Posts.Add(post);
            }
            _context.SaveChanges();
        }

    };
}
