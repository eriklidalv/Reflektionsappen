using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Reflektionsappen.Identity.Models;
using Reflektionsappen.Models.Requests;

namespace Reflektionsappen.Controllers
{
    [Route("api/[controller]")]
    public class UserManagementController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;

        public UserManagementController(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<bool>> Create([FromBody] CreateUserRequest request)
        {
            var result = await userManager.CreateAsync(
                new ApplicationUser
                {
                    UserName = request.Email,
                    Email = request.Email,
                    EmailConfirmed = false
                }, request.Password);

            if (!result.Succeeded)
            {
                return BadRequest(false);
            }

            //var user = await userManager.FindByNameAsync(request.Email);
            //var token = await userManager.GenerateEmailConfirmationTokenAsync(user);
            // TODO mail token

            return Ok(true);

        }

        //[HttpPost("[action]")]
        //public async Task<ActionResult<bool>> Confirm([FromBody] string token)
        //{
        //    var result = await userManager.ConfirmEmailAsync().CreateAsync(
        //        new ApplicationUser
        //        {
        //            UserName = request.Email,
        //            Email = request.Email,
        //            EmailConfirmed = false
        //        }, request.Password);
        //}


        //Temp to test GET
        private static readonly string[] Summaries = {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }


    }
}
