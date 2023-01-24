using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace codingchallenge.Data
{
    internal static class OrderRepository
    {
        internal async static  Task<List<Order>> GetOrdersAsync()
        {
            using (var db = new OrderDBContext())
            {
                return await db.Orders.ToListAsync();
            }
        }

        internal async static Task<Order> GetOrderByIdAsync(int orderId)
        {
            using (var db = new OrderDBContext())
            {
                return await db.Orders.FirstOrDefaultAsync(order => order.orderId== orderId);
            }
        }

        internal async static Task<bool> CreateOrderAsync(Order orderToCreate)
        {
            using (var db = new OrderDBContext()) 
            { 
                try
                {
                    await db.Orders.AddAsync(orderToCreate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        internal async static Task<bool> UpdateOrderAsync(Order orderToUpdate)
        {
            using (var db = new OrderDBContext())
            {
                try
                {
                    await db.Orders.AddAsync(orderToUpdate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        internal async static Task<bool> DeleteOrderAsync(int orderId)
        {
            using (var db = new OrderDBContext())
            {
                try
                {
                    Order orderToDelete = await GetOrderByIdAsync(orderId);

                    db.Remove(orderToDelete);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        internal async static Task<Order> GetOrderByTypeAsync(string orderType)
        {
            using (var db = new OrderDBContext())
            {
                return await db.Orders.FirstOrDefaultAsync(order => order.orderType == order.orderType);
            }
            }
    }
}
