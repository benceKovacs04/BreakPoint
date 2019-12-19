using BreakPoint.Interfaces;
using BreakPoint.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace BreakPoint.Services
{

    public class ApiService : IApiService<RSS>
    {
        private readonly string BASE_API_PATH = "https://cloud.feedly.com/v3/search/feeds/?query=";
        private readonly string RSS_API_PATH = "https://cloud.feedly.com/v3/streams/contents?count=5&ranked=newest&streamId=";

        public async Task<List<News>> GetNews(string keyword)
        {
            RSSApiResult rssResult = await GetRSSBy(keyword);
            List<News> news = await GetNewsFromRSSApiResult(rssResult);
            return news;
        }

        private async Task<RSSApiResult> GetRSSBy(string query)
        {
            string data = await GetData(query);
            RSSApiResult rssList = BuildResult(data);
            return rssList;
        }

        private async Task<string> GetData(string query)
        {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync(BASE_API_PATH + query);
        }

        private RSSApiResult BuildResult(string jsonData)
        {
            RSSApiResult response = JsonConvert.DeserializeObject<RSSApiResult>(jsonData);
            
            return response;
        }

        private async Task<List<News>> GetNewsFromRSSApiResult(RSSApiResult result)
        {
            List<News> newsList = new List<News>();
            HttpClient client = new HttpClient();
            foreach (var item in result.Result)
            {
                var response = await client.GetStringAsync(RSS_API_PATH + item.FeedURL);
                NewsApiResult newsResult = JsonConvert.DeserializeObject<NewsApiResult>(response);
                foreach (var news in newsResult.Items)
                {
                    newsList.Add(news);
                }
            }
            return newsList;
        }
    }
}
