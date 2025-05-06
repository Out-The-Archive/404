import {
    Asteri,
    Astina,
    Aston,
    Astren,
    Astrid,
    Astro,
    Astrota,
    Rick,
} from "../assets/asters";

export type Aster =
    | "Astrota"
    | "Astren"
    | "Asteri"
    | "Aston"
    | "Astro"
    | "Astina"
    | "Astrid"
    | "Rick";

type AsterProps = {
    Aster: Aster;
};

const Asters = {
    Astrota: <Astrota />,
    Astren: <Astren />,
    Asteri: <Asteri />,
    Aston: <Aston />,
    Astro: <Astro />,
    Astina: <Astina />,
    Astrid: <Astrid />,
    Rick: <Rick />,
};

export default function Aster({ Aster }: AsterProps) {
    return <>{Asters[Aster]}</>;
}
