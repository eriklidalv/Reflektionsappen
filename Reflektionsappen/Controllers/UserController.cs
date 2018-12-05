using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Reflektionsappen.Identity.Models;
using Reflektionsappen.Models.Requests;
using Reflektionsappen.Models.Responses;

namespace Reflektionsappen.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;

        public UserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<bool>> SignIn([FromBody] SignInRequest request)
        {
            var user = await userManager.FindByNameAsync(request.Email);
            if (user == null)
            {
                return Unauthorized();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);

            if (result.Succeeded)
            {
                return Ok(true);
            }

            return Unauthorized();
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

            var user = await userManager.FindByNameAsync(request.Email);
            var token = await userManager.GenerateEmailConfirmationTokenAsync(user);
            token = HttpUtility.UrlEncode(token);
            // TODO mail token

            return Ok(true);
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<UserResponse>> Confirm([FromQuery] string email, [FromQuery] string token)
        {
            var user = await userManager.FindByNameAsync(email);
            var result = await userManager.ConfirmEmailAsync(user, token);
            if (!result.Succeeded)
            {
                return BadRequest(false);
            }

            user.EmailConfirmed = true;
            result = await userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return BadRequest(false);
            }

            return Ok(new UserResponse { Email = user.Email });
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<UserResponse>> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            var user = await userManager.FindByNameAsync(request.Email);
            var result = await userManager.ResetPasswordAsync(user, request.Token, request.Password);
            if (!result.Succeeded)
            {
                return BadRequest(false);
            }

            return Ok(new UserResponse { Email = user.Email });
        }

    }
}
