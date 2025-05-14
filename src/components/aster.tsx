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
    size?: number;
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

export default function Aster({ Aster, size = 32 }: AsterProps) {
    return (
        <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '100%', transform: 'scale(0.1)' }}>
                {Asters[Aster]}
            </div>
        </div>
    );
}
