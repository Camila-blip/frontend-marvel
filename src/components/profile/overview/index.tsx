import * as S from "./style";

type OverviewType = {
    name: string;
    description: string;
    urlImg: string;
    extension: string;
};
export default function Overview({
    name,
    description,
    urlImg,
    extension,
}: OverviewType) {
    return (
        <S.WrapperOverview>
            <S.ImageOverview>
                <img src={`${urlImg}.${extension}`} alt={name} />
            </S.ImageOverview>
            <S.ContentOverview>
                <div>
                    <S.Title>{name}</S.Title>
                </div>
                <S.Description>
                    {description ? (
                        description
                    ) : (
                        <>
                            Agent is a fictional superhero appearing in American
                            comic books published by Marvel Comics and is a
                            founding member of the X-Men.
                        </>
                    )}
                </S.Description>
            </S.ContentOverview>
        </S.WrapperOverview>
    );
}
