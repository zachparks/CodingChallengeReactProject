using codingchallenge.Data;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy", builder =>
    {
        builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithOrigins("http://localhost:3000", "https://codingchallengeredtech-aspnetserver.azurewebsites.net");

    });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions =>
{
    swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "Coding Challenge", Version = "v1" });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(swaggerUIOptions =>
{
    swaggerUIOptions.DocumentTitle = "Coding Challenge";
    swaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API serving for Order model");
    swaggerUIOptions.RoutePrefix = string.Empty;
});

app.UseHttpsRedirection();

app.UseCors("CORSPolicy");

app.MapGet("/get-all-orders", async () => await OrderRepository.GetOrdersAsync())
    .WithTags("Orders Endpoints");

app.MapGet("/get-order-by-id/{orderId}", async (int orderId) =>
{
    Order orderToReturn = await OrderRepository.GetOrderByIdAsync(orderId);

    if(orderToReturn != null)
    {
        return Results.Ok(orderToReturn);
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Orders Endpoints");

app.MapPost("/create-order", async (Order orderToCreate) =>
{
    bool createSuccessful = await OrderRepository.CreateOrderAsync(orderToCreate);

    if (createSuccessful)
    {
        return Results.Ok("Create Successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Orders Endpoints");

app.MapPut("/update-order", async (Order orderToUpdate) =>
{
    bool updateSuccessful = await OrderRepository.UpdateOrderAsync(orderToUpdate);

    if (updateSuccessful)
    {
        return Results.Ok("Update Successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Orders Endpoints");

app.MapDelete("/delete-order-by-id/{orderId}", async (int orderId) =>
{
    bool deleteSuccessful = await OrderRepository.DeleteOrderAsync(orderId);

    if (deleteSuccessful)
    {
        return Results.Ok("Delete Successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Orders Endpoints");

app.MapGet("/get-order-by-type/{orderType}", async (string orderType) =>
{
    Order orderToReturn = await OrderRepository.GetOrderByTypeAsync(orderType);

    if (orderToReturn != null)
    {
        return Results.Ok(orderToReturn);
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Orders Endpoints");

app.Run();

