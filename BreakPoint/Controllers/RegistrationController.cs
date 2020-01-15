using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using BreakPoint.Model.DbModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BreakPoint.Controllers
{
    [ApiController]
    [Route("/register")]
    public class RegistrationController : ControllerBase
    {
        private BreakPointContext _bpContext;
        private UserManager<User> _userManager;

        public RegistrationController(BreakPointContext bpContext, UserManager<User> userManager)
        {
            _bpContext = bpContext;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IdentityResult> RegisterUser()
        {
            Dictionary<string, string> requestBody;
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                var body = await reader.ReadToEndAsync();
                requestBody = JsonConvert.DeserializeObject<Dictionary<string, string>>(body);
            }

            User newUser = new User()
            {
                UserName = requestBody["username"],
                Email = requestBody["email"]
            };

            var result = await _userManager.CreateAsync(newUser, requestBody["password"]);

            return result;
        }
    }
}