using BreakPoint.Interfaces;
using BreakPoint.Model;
using BreakPoint.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BreakPoint.Controllers
{
    [ApiController]
    [Route("/subscribe")]
    public class SubscribeController : ControllerBase
    {
        private IApiService<RSS> _apiService;

        public SubscribeController(IApiService<RSS> apiService)
        {
            _apiService = apiService;
        }

        [Authorize]
        [HttpPost]
        public async Task<List<News>> SubscribeRSS()
        {
            Dictionary<string, string> requestBody;
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                var body = await reader.ReadToEndAsync();
                requestBody = JsonConvert.DeserializeObject<Dictionary<string, string>>(body);
            }

            List<News> news = await _apiService.GetNews(requestBody["userInput"]);

            return news;
        }
    }
}