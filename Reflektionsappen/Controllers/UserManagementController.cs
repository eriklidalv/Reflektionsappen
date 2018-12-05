using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reflektionsappen.Models.Requests;

namespace Reflektionsappen.Controllers
{
    [Route("api/[controller]")]
    public class UserManagementController : Controller
    {
        

        [HttpPost("[action]")]
        public async Task<ActionResult<bool>> Login([FromBody] LoginRequest request)
        {
            
            return true;
        }

        
    }
}
