import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import * as S from "./style";
import { useEffect } from "react";
import { useStore } from "contexts/Marvel.context";
import { useMarvelQuery } from "hooks/useMarvelQuery";

export default function Pagination() {
    const { limit, setOffSet, offset, currentPage, setCurrentPage } =
        useStore();
    const { refetchListMarvel } = useMarvelQuery();

    useEffect(() => {
        const calculate = currentPage * limit;
        setOffSet(calculate);
    }, [currentPage]);

    useEffect(() => {
        refetchListMarvel();
    }, [offset]);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const calculateNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage < limit) {
            setCurrentPage(nextPage);
        }
    };

    const calculatePrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage >= 0) {
            setCurrentPage(prevPage);
        }
    };

    return (
        <S.Container>
            <S.Paginate
                previousLabel={
                    <S.Button onClick={calculatePrevPage}>
                        <BsArrowLeft />
                        Anterior
                    </S.Button>
                }
                nextLabel={
                    <S.Button onClick={calculateNextPage}>
                        Próxima <BsArrowRight />
                    </S.Button>
                }
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </S.Container>
    );
}
