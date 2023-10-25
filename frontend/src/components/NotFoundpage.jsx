/* eslint-disable */

import React from "react";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className="text-center">
            <div className="img-fluid"></div>
            <img alt="Страница не найдена" className="img-fluid h-25" src="какая-то ссылка"/>
            <h1 className="h4 text-muted">{t('notFound')}</h1>
            <p className="text-muted">
                {t('youCanGo')}
                <a href='/'>{t('toHomePage')}</a>
            </p>
        </div>
    );
};

export default NotFoundPage;