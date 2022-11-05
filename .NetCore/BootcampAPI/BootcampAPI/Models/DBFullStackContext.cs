using Microsoft.EntityFrameworkCore;

namespace BootcampAPI.Models
{
    public class DBFullStackContext : DbContext
    {
        public DBFullStackContext() { }
        //public DBFullStackContext(DbContextOptions<DBFullStackContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("DATA SOURCE=KAMILKAPLAN;DATABASE=DBFullStack;UID=sa;PWD=1");
        }

    }
}
