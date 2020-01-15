using BreakPoint.Model.DbModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;


namespace BreakPoint.Controllers
{
    [ApiController]
    [Route("/api/login")]
    public class TokenController : ControllerBase
    {
        private readonly BreakPointContext _context;
        private readonly IConfiguration _config; 
        public TokenController(IConfiguration config, BreakPointContext context)
        {
            _context = context;
            _config = config;
        }

       // [HttpPost]
        /*public async Task<IActionResult> login()
        {
            Dictionary<string, string> requestBody;
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                var body = await reader.ReadToEndAsync();
                requestBody = JsonConvert.DeserializeObject<Dictionary<string, string>>(body);
            }

            var uiUserName = requestBody["username"];
            var uiPassword = requestBody["password"];

            if(uiUserName != null && uiPassword != null)
            {
                User user = _context.Users.FirstOrDefault(u => u.UserName == uiUserName && u.Password == uiPassword);

                if (user != null)
                {
                    var claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("username", user.UserName),
                    new Claim("password", user.Email)
                   };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }*/

    }
}
