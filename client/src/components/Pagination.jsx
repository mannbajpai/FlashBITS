const Pagination = ({ currentPage, totalPages, setPage }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="btn-group mt-6">
            {pages.map(page => (
                <button 
                    key={page} 
                    className={`btn ${currentPage === page ? 'btn-accent' : 'btn-secondary'}`}
                    onClick={() => setPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
