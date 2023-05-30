import {component$, useStyles$} from '@builder.io/qwik';
import {useLocation} from '@builder.io/qwik-city';
import styles from './header.scss?inline';

export default component$(() => {
    useStyles$(styles);

    const {url} = useLocation();

    return (
        <header>
            <a class="logo" href="/">
                Tips & Tricks for Web Development
            </a>
            <nav>
                <a href="/docs" class={{active: url.pathname.startsWith('/docs')}}>
                    Docs
                </a>
                <a href="/about-us" class={{active: url.pathname.startsWith('/about-us')}}>
                    About Us
                </a>
            </nav>
        </header>
    );
});
