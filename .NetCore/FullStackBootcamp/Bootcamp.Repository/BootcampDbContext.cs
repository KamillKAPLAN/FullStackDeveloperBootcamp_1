using Bootcamp.Core;
using Bootcamp.Repository.Configurations;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Bootcamp.Repository
{
    public class BootcampDbContext : DbContext
    {
        public BootcampDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        /* var p = new Product() { Name = "", ProductFeature = new ProductFeature() { Width = 10 } }; */
        public DbSet<ProductFeature> ProductFeatures { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            /* modelBuilder.ApplyConfiguration(new CategoryConfiguration()); */
            base.OnModelCreating(modelBuilder);
        }
    }
}
