import { FC, PropsWithChildren } from 'react';
import styled from '../layout/Layout.module.scss';

const Content: FC<PropsWithChildren> = ({ children }) => {
    return (
        <section className={styled.content}>
            <div className={styled.wrapper}>{children}</div>
        </section>
    )
};

export default Content;