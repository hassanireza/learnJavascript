import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export const CertificateVerify: React.FC = () => {
  const { certId } = useParams<{ certId: string }>();
  const { certificate } = useProgress();
  const navigate = useNavigate();
  const [input, setInput] = useState(certId ?? '');

  const match = certId && certificate && certificate.certId === certId ? certificate : null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) navigate(`/verify/${input.trim()}`);
  };

  return (
    <div className="verify-page">
      <div className={`verify-card ${certId ? (match ? 'verify-valid' : 'verify-invalid') : ''}`}>
        <h1>Certificate Verification</h1>

        {!certId && (
          <form onSubmit={handleSearch} style={{ marginTop: 20 }}>
            <div className="form-group">
              <label htmlFor="certIdInput">Certificate ID</label>
              <input
                id="certIdInput"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="LFS-JS30-2026-XXXXXX"
              />
            </div>
            <button type="submit" className="btn-glow">Verify</button>
          </form>
        )}

        {certId && match && (
          <>
            <p style={{ color: 'var(--green)', fontSize: '1.1rem', margin: '20px 0' }}>✓ Valid Certificate</p>
            <p><strong>{match.holderName}</strong></p>
            <p style={{ color: 'var(--muted)' }}>Learn JavaScript in 30 Days</p>
            <p style={{ color: 'var(--muted)' }}>
              Score: {match.score}% · Issued {new Date(match.issuedAt).toLocaleDateString()}
            </p>
            <p style={{ color: 'var(--dim)', fontSize: '0.82rem', marginTop: 20 }}>
              Certificate ID: {match.certId}
            </p>
          </>
        )}

        {certId && !match && (
          <>
            <p style={{ color: 'var(--red)', fontSize: '1.1rem', margin: '20px 0' }}>✗ Not Found</p>
            <p style={{ color: 'var(--muted)' }}>
              No certificate with ID <strong>{certId}</strong> exists in this browser.
            </p>
          </>
        )}

        <p style={{ color: 'var(--dim)', fontSize: '0.78rem', marginTop: 30, lineHeight: 1.6 }}>
          This is a client-only showcase application, so certificates are stored in your browser
          rather than on a central server. Verification only succeeds in the same browser that
          issued the certificate. A production deployment would verify against a real database.
        </p>

        <Link to="/" style={{ display: 'inline-block', marginTop: 20, color: 'var(--cyan)' }}>
          ← Back Home
        </Link>
      </div>
    </div>
  );
};

export default CertificateVerify;
