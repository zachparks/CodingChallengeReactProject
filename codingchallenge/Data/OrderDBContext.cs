using Microsoft.EntityFrameworkCore;

namespace codingchallenge.Data
{
    public class OrderDBContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public Microsoft.EntityFrameworkCore.DbSet<Order> Orders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/OrderDB.db");

        (int, int, int) value = (2020, 12, 25);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Order[] orderToSeed = new Order[6];

            for (int i = 1; i <= 6; i++)
            {
                orderToSeed[i - 1] = new Order
                {
                    orderId = i,
                    orderType = $"Standard",
                    customerName = $"Taylor",
                    dateCreated = value.ToString(),
                    createdByUsername = $"Zach"
                };
            }

            modelBuilder.Entity<Order>().HasData(orderToSeed);
        }
    }
}
