using BreakPoint.Model.DbModel;
using Microsoft.AspNetCore.Identity;

namespace BreakPoint.Interfaces
{
    public interface IHasherService
    {
        string HashPassword(User user, string password);

        PasswordVerificationResult ValidateUser(User user, string pwInput);

    }
}