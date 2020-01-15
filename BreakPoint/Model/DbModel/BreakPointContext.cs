using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BreakPoint.Model.DbModel
{
    public class BreakPointContext : IdentityDbContext<User>
    {
        public BreakPointContext (DbContextOptions<BreakPointContext> options) : base(options)
        {

        }

        public DbSet<User> AppUsers { get; set; }
        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            /* builder.Entity<User>().ToTable("User");
             builder.Entity<Post>().ToTable("Post"); */

            base.OnModelCreating(builder);
        }
    }
}