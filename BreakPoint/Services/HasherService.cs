using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using BreakPoint.Interfaces;
using BreakPoint.Model.DbModel;
using Microsoft.AspNetCore.Identity;

namespace BreakPoint.Services
{
    public class HasherService : IHasherService
    {
        private PasswordHasher<User> _pwHasher;

        public HasherService()
        {
            _pwHasher = new PasswordHasher<User>();
        }

        public string HashPassword(User user, string pw)
        {
            return _pwHasher.HashPassword(user, pw);
        }

        public PasswordVerificationResult ValidateUser(User user, string pwInput)
        {
            return _pwHasher.VerifyHashedPassword(user, user.Password, pwInput);
        }
    }
}