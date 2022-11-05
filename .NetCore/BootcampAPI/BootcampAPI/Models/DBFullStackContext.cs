using Microsoft.EntityFrameworkCore;

namespace BootcampAPI.Models
{
    public class DBFullStackContext : DbContext
    {
        public DBFullStackContext() { }
        //public DBFullStackContext(DbContextOptions<DBFullStackContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("DATA SOURCE=KAMILKAPLAN;DATABASE=DBFullStack;UID=sa;PWD=1");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.HasDefaultSchema("SchemaName");
            // modelBuilder.Entity<Student>().ToTable("TableName");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>().Property(x => x.SID).HasColumnName("").HasComment("");
            //modelBuilder.Entity<Student>(entity =>
            //{
            //    // entity.ToTable("...");
            //    // entity.ToTable("TableName", "SchemaName");
            //    entity.HasKey(x => x.SID);
            //    entity.Property(x => x.StudentName).HasColumnName("Name").HasMaxLength(25);
            //    entity.Property(x => x.Height)
            //    .IsRequired()
            //    .HasDefaultValue("1.1")
            //    .HasColumnType("float")
            //    .HasComputedColumnSql("decimal(14,2)");
            //});
        }
    }
}
