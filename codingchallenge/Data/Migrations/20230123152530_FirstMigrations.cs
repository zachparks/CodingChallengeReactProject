using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace codingchallenge.Data.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    orderId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    orderType = table.Column<string>(type: "TEXT", nullable: false),
                    customerName = table.Column<string>(type: "TEXT", nullable: false),
                    dateCreated = table.Column<string>(type: "TEXT", nullable: false),
                    createdByUsername = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.orderId);
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "orderId", "createdByUsername", "customerName", "dateCreated", "orderType" },
                values: new object[,]
                {
                    { 1, "Zach", "Taylor", "12/21/2020", "Standard" },
                    { 2, "Zach", "Taylor", "12/21/2020", "Standard" },
                    { 3, "Zach", "Taylor", "12/21/2020", "Standard" },
                    { 4, "Zach", "Taylor", "12/21/2020", "Standard" },
                    { 5, "Zach", "Taylor", "12/21/2020", "Standard" },
                    { 6, "Zach", "Taylor", "12/21/2020", "Standard" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
