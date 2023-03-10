// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using codingchallenge.Data;

#nullable disable

namespace codingchallenge.Data.Migrations
{
    [DbContext(typeof(OrderDBContext))]
    [Migration("20230123152530_FirstMigrations")]
    partial class FirstMigrations
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.2");

            modelBuilder.Entity("codingchallenge.Data.Order", b =>
                {
                    b.Property<int>("orderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("createdByUsername")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("customerName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("dateCreated")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("orderType")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("orderId");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            orderId = 1,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        },
                        new
                        {
                            orderId = 2,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        },
                        new
                        {
                            orderId = 3,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        },
                        new
                        {
                            orderId = 4,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        },
                        new
                        {
                            orderId = 5,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        },
                        new
                        {
                            orderId = 6,
                            createdByUsername = "Zach",
                            customerName = "Taylor",
                            dateCreated = "12/21/2020",
                            orderType = "Standard"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
