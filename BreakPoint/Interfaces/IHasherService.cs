namespace BreakPoint.Interfaces
{
    public interface IHasherService
    {
        void HashPassword();

        bool ValidateUser(string password);

    }
}