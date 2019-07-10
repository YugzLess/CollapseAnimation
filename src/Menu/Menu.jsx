import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import './Menu.css'

export const Menu = () => {
    const menuEl = useRef(null);
    const menuContentsEl = useRef(null);
    const menuToggleButtonEl = useRef(null);
    const menuTitleEl = useRef(null);
    const [expanded, setExpanded] = useState(true);
    const [animate, setAnimate] = useState(true);
    const [collapsed, setCollapsed] = useState(null);

    useEffect(() => {
        if (menuToggleButtonEl && menuToggleButtonEl.current) {
            menuToggleButtonEl.current.addEventListener('click', toggle);
        }

        // clean up
        return () => menuToggleButtonEl.current.removeEventListener("click", toggle);
    }, [expanded]);

    const activate = () => {
        menuEl.current.classList.add('menu--active');
        setAnimate(true);
    }

    const expand = () => {
        if (expanded) {
            return;
        }

        setExpanded(true);

        menuEl.current.style.transform = `scale(1, 1)`;
        menuContentsEl.current.style.transform = `scale(1, 1)`;

        if (!animate) {
            return;
        }

        applyAnimation({expand: true}, { x: 1, y: 1});
    };

    const collapse = (scales = collapsed) => {
        if (!expanded) {
            return;
        }
        setExpanded(false);

        const { y } = scales;
        const invY = 1 / y;

        menuEl.current.style.transform = `scale(1, ${y})`;
        menuContentsEl.current.style.transform = `scale(1, ${invY})`;

        if (!animate) {
            return;
        }

        applyAnimation({expand: false}, scales);
    }

    const toggle = () => {

        if (expanded) {
            collapse();
            return;
        }
        expand();
    };

    const applyAnimation = ({ expand }, scales) => {
        menuEl.current.classList.remove('menu--expanded');
        menuEl.current.classList.remove('menu--collapsed');
        menuContentsEl.current.classList.remove('menu__contents--expanded');
        menuContentsEl.current.classList.remove('menu__contents--collapsed');

        // Force a recalc styles here so the classes take hold.
        /* eslint-disable  no-unused-expressions */
        window.getComputedStyle(menuEl.current).transform;

        if (expand) {
            menuEl.current.classList.add('menu--expanded');
            menuContentsEl.current.classList.add('menu__contents--expanded');
            return;
        }

        menuEl.current.classList.add('menu--collapsed');
        menuContentsEl.current.classList.add('menu__contents--collapsed');
    }

    // ================== clean =====================
    const calculateScales = () => {
        const collapsedBounding = menuTitleEl.current.getBoundingClientRect();
        const expandedBounding = menuEl.current.getBoundingClientRect();
        setCollapsed({
            x: collapsedBounding.width / expandedBounding.width,
            y: collapsedBounding.height / expandedBounding.height
        });

        return {
            x: collapsedBounding.width / expandedBounding.width,
            y: collapsedBounding.height / expandedBounding.height
        }
    };

    const createEaseAnimations = (scales) => {
        let menuEase = document.querySelector('.menu-ease');
        if (menuEase) {
            return menuEase;
        }

        menuEase = document.createElement('style');
        menuEase.classList.add('menu-ease');

        const menuExpandAnimation = [];
        const menuExpandContentsAnimation = [];
        const menuCollapseAnimation = [];
        const menuCollapseContentsAnimation = [];
        for (let i = 0; i <= 100; i++) {
            const step = _ease(i/100);

            // Expand animation.
            append({
                i,
                step,
                startY: scales.y,
                endY: 1,
                outerAnimation: menuExpandAnimation,
                innerAnimation: menuExpandContentsAnimation
            });

            // Collapse animation.
            append({
                i,
                step,
                startY: 1,
                endY: scales.y,
                outerAnimation: menuCollapseAnimation,
                innerAnimation: menuCollapseContentsAnimation
            });
        }

        menuEase.textContent = `
      @keyframes menuExpandAnimation {
        ${menuExpandAnimation.join('')}
      }

      @keyframes menuExpandContentsAnimation {
        ${menuExpandContentsAnimation.join('')}
      }
      
      @keyframes menuCollapseAnimation {
        ${menuCollapseAnimation.join('')}
      }

      @keyframes menuCollapseContentsAnimation {
        ${menuCollapseContentsAnimation.join('')}
      }`;

        document.head.appendChild(menuEase);
        return menuEase;
    };

    const append = ({
                        i,
                        step,
                        startY,
                        endY,
                        outerAnimation,
                        innerAnimation}) => {

        const yScale = startY + (endY - startY) * step;

        const invScaleY = 1 / yScale;

        outerAnimation.push(`
      ${i}% {
        transform: scale(1, ${yScale});
      }`);

        innerAnimation.push(`
      ${i}% {
        transform: scale(1, ${invScaleY});
      }`);
    };

    const clamp = (value, min, max) => {
        return Math.max(min, Math.min(max, value));
    };

    const _ease  = (v, pow=4) => {
        v = clamp(v, 0, 1);

        return 1 - Math.pow(1 - v, pow);
    };;

    useLayoutEffect(() => {
        const scales = calculateScales();
        setCollapsed(scales);
        createEaseAnimations(scales);
        collapse(scales);
        activate();

    }, []);

    return (
        <nav ref={menuEl} className={`menu js-menu ${animate && 'menu--active'}`}>
            <div ref={menuContentsEl} className="menu__contents js-menu-contents">
                <button ref={menuToggleButtonEl} className="menu__toggle js-menu-toggle">
                    <h1 ref={menuTitleEl} className="menu__title js-menu-title">Menu</h1>
                </button>
                <ul className="menu__items">
                    <li className="menu__item">Menu item 1</li>
                    <li className="menu__item">Menu item 2</li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
