using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BreakPoint.Controllers
{
    [ApiController]
    [Route("/subscribe")]
    public class SubscribeController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> SubscribeRSS()
        {

            return Ok();
        }
    }
}
