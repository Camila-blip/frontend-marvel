import { ReactElement, useContext } from "react";
import * as S from "./style";
import { MarvelContent } from "contexts/Marvel.context";
import { useNavigate } from "react-router-dom";

type ContentHomeType = {
    listAgent: [];
    isLoading: boolean;
};
export default function ContentHome({
    listAgent,
    isLoading,
}: ContentHomeType): ReactElement {
    const route = useNavigate();
    const { setPerfilSelected } = useContext(MarvelContent);
    return (
        <S.Container>
            {isLoading ? (
                <span> loading</span>
            ) : (
                listAgent?.map((item: any, index) => (
                    <S.ContentMarvel
                        key={index}
                        onClick={() => {
                            setPerfilSelected(item), route("/profile");
                        }}
                    >
                        <img
                            src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
                            alt={item.name}
                        />
                        <S.Description>
                            <h5>{item.name}</h5>
                            <span>
                                {item?.description ? (
                                    item?.description.length > 150 ? (
                                        `${item?.description.slice(0, 150)}...`
                                    ) : (
                                        item?.description
                                    )
                                ) : (
                                    <>
                                        {
                                            "Agent is a fictional superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men."
                                        }
                                    </>
                                )}
                            </span>
                        </S.Description>
                    </S.ContentMarvel>
                ))
            )}
        </S.Container>
    );
}
