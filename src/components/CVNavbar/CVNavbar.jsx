import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CVNavbar.css';

export default function CVNavbar({ onDownloadClick }) {

    const { t, i18n } = useTranslation();
    
    return (
        <nav className="cv-navbar-container">
            <div className="cv-navbar-buttons">
                <Link to="/" className="cv-navbar-button">
                    {t('CVNavBar_Backbutton')}
                </Link>

                <a
                    href="/RuyLunaCV_ES.pdf"
                    download="RuyLuna_CV.pdf"
                    className="cv-navbar-button"
                    onClick={onDownloadClick}
                >
                    {t('CVNavBar_Downloadbutton')}
                </a>
            </div>
        </nav>
    );
}