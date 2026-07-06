import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function getGrade(score: number): 'Distinction' | 'Merit' | 'Pass' {
  if (score >= 95) return 'Distinction';
  if (score >= 85) return 'Merit';
  return 'Pass';
}

export const CertificateView: React.FC = () => {
  const { certId } = useParams<{ certId: string }>();
  const { certificate } = useProgress();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  if (!certificate || certificate.certId !== certId) {
    return (
      <div className="cert-page">
        <div className="empty-state">
          <h1>Certificate Not Found</h1>
          <p>This browser does not have a certificate with ID {certId}.</p>
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  const verifyUrl = `${window.location.origin}${window.location.pathname}#/verify/${certificate.certId}`;
  const issuedDate = new Date(certificate.issuedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const grade = getGrade(certificate.score);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(verifyUrl);
      setCopied(true);
      showToast('Verification link copied to clipboard.', 'success');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Could not copy automatically, please copy the link manually.', 'error');
    }
  };

  const linkedinUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
    'Learn JavaScript in 30 Days'
  )}&organizationName=${encodeURIComponent('JSLearn')}&issueYear=${new Date(
    certificate.issuedAt
  ).getFullYear()}&issueMonth=${new Date(certificate.issuedAt).getMonth() + 1}&certUrl=${encodeURIComponent(
    verifyUrl
  )}&certId=${encodeURIComponent(certificate.certId)}`;

  return (
    <div className="cert-page">
      <div className="cert-actions">
        <Link to="/dashboard" className="brand-back">← Back to Dashboard</Link>
        <div className="cert-action-btns">
          <button type="button" className="btn-nav-outline" onClick={() => window.print()}>
            ⬇ Save as PDF
          </button>
          <button type="button" className="btn-nav-outline" onClick={handleCopyLink}>
            {copied ? '✓ Copied' : '🔗 Copy Verify Link'}
          </button>
          <a className="btn-nav-outline btn-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
            in Add to LinkedIn
          </a>
        </div>
      </div>

      <div className="cert-card" id="certificate-card">
        <div className="cert-glow-1"></div>
        <div className="cert-glow-2"></div>
        <div className="cert-border-outer"></div>
        <div className="cert-border-inner"></div>

        <div className="cert-content">
          <div className="cert-header">
            <div className="cert-logo-block">
              <img src={withBase('logo.svg')} className="cert-logo-img" alt="JSLearn" />
              <div>
                <div className="cert-logo-name">JSLearn</div>
                <div className="cert-logo-sub">Learn JavaScript in 30 Days</div>
              </div>
            </div>
            <div className="cert-id-block">
              <div className="cert-id-label">Certificate ID</div>
              <div className="cert-id-value">{certificate.certId}</div>
            </div>
          </div>

          <div className="cert-body">
            <div className="cert-label">Certificate of Completion</div>
            <div className="cert-title-main">This certifies that</div>
            <div className="cert-divider"></div>

            <div className="cert-name">{certificate.holderName}</div>
            <div className="cert-course">has successfully completed Learn JavaScript in 30 Days</div>

            <div className={`cert-grade-badge grade-${grade.toLowerCase()}`}>
              {grade} · {Math.round(certificate.score)}%
            </div>

            <div className="cert-skills">
              <span className="cert-skill-tag">JavaScript ES6+</span>
              <span className="cert-skill-tag">DOM and Events</span>
              <span className="cert-skill-tag">Async / Await</span>
              <span className="cert-skill-tag">OOP</span>
              <span className="cert-skill-tag">Data Structures</span>
              <span className="cert-skill-tag">Browser APIs</span>
            </div>
          </div>

          <div className="cert-footer">
            <div className="cert-sig-block">
              <div className="cert-sig-line"></div>
              <div className="cert-sig-name">JSLearn</div>
              <div className="cert-sig-title">Program Director</div>
            </div>

            <div className="cert-verify-block">
              <div className="cert-qr" aria-label="Certificate verification mark">🔒</div>
              <div className="cert-verify-label">Verify online</div>
            </div>

            <div className="cert-date-block">
              <div className="cert-date-label">Issued</div>
              <div className="cert-date-value">{issuedDate}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="linkedin-guide">
        <h3>📌 Add this to LinkedIn</h3>
        <ol>
          <li><strong>Profile → Add profile section → Licenses and certifications</strong></li>
          <li>Name: <strong>Learn JavaScript in 30 Days</strong> · Issuer: <strong>JSLearn</strong></li>
          <li>Credential ID: <strong>{certificate.certId}</strong></li>
          <li>Paste the verification link below into the credential URL field</li>
        </ol>
        <button className="cert-url-copy" type="button" onClick={handleCopyLink}>
          {verifyUrl}
        </button>
      </div>
    </div>
  );
};

export default CertificateView;
