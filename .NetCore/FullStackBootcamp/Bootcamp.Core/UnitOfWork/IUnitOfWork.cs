using System.Threading.Tasks;

namespace Bootcamp.Core.UnitOfWork
{
    public interface IUnitOfWork
    {
        void Commit();
        Task CommitAsync();   
    }
}
