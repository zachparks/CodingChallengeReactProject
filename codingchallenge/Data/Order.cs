using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace codingchallenge.Data
{
    public class Order
    {
        [Key]
        public int orderId { get; set; }

        [Required]
        public string orderType { get; set; } = string.Empty;

        [Required]
        public string customerName { get; set; } = string.Empty;

        [Required]
        public string dateCreated { get; set; } = string.Empty;

        [Required]
        public string createdByUsername { get; set; } = string.Empty;

    }
}
