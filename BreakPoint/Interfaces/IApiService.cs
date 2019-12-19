using BreakPoint.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakPoint.Interfaces
{
    public interface IApiService<T>
    {
        Task<List<News>> GetNews(string keyword);

    }
}
