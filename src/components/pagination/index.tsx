import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";
import { create } from "zustand";

export default function Pagination() {
    const { limit, setOffSet, refetchListMarvel, currentPage, setCurrentPage } =
        useContext(MarvelContent);
    useEffect(() => {
        const calculate = currentPage * limit;
        console.log("currentPage", currentPage);

        setOffSet(() => calculate);
        refetchListMarvel();
    }, [currentPage]);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected;
        console.log("aqui");
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
                    <div onClick={calculatePrevPage}>
                        <BsArrowLeft />
                        Anterior
                    </div>
                }
                nextLabel={
                    <div onClick={calculateNextPage}>
                        Próxima <BsArrowRight />
                    </div>
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
