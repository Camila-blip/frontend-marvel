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
                <S.Description>{description}</S.Description>
            </S.ContentOverview>
        </S.WrapperOverview>
    );
}
