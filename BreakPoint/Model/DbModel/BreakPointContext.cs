using Microsoft.EntityFrameworkCore;

namespace BreakPoint.Model.DbModel
{
    public class BreakPointContext : DbContext
    {
        public BreakPointContext (DbContextOptions<BreakPointContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}