using Bootcamp.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bootcamp.Repository.Configurations
{
    public class ProductFeatureConfiguration : IEntityTypeConfiguration<ProductFeature>
    {
        public void Configure(EntityTypeBuilder<ProductFeature> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).UseIdentityColumn();

            /* 1 - 1 */
            builder.HasOne(x => x.Product).WithOne(x => x.ProductFeature).HasForeignKey<ProductFeature>(x => x.ProductId);
        }
    }
}
