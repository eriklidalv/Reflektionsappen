using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Reflektionsappen.Identity.Models;
using Reflektionsappen.Models.Requests;

namespace Reflektionsappen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignInManagementController : Controller
    {
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;

        public SignInManagementController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
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
    }
}