using BreakPoint.Interfaces;
using BreakPoint.Model;
using BreakPoint.Services;
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
        private IApiService<RSS> _apiService;

        public SubscribeController(IApiService<RSS> apiService)
        {
            _apiService = apiService;
        }

        [HttpPost]
        public async Task<List<News>> SubscribeRSS()
        {
            List<News> news = await _apiService.GetNews(1,2);
            int ass = 54;
            return news;
        }
    }
}
