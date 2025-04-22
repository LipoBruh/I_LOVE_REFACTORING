export default function Test() {
    return (
      <div className="p-8 space-y-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Theme Color Showcase Form</h2>
  
        {/* Primary */}
        <div className="bg-primary text-primary-content p-4 rounded-lg">
          <label className="label">
            <span className="label-text text-primary-content">Primary Email</span>
          </label>
          <input type="email" placeholder="you@example.com" className="input w-full" />
        </div>
  
        {/* Secondary */}
        <div className="bg-secondary text-secondary-content p-4 rounded-lg">
          <label className="label">
            <span className="label-text text-secondary-content">Secondary Name</span>
          </label>
          <input type="text" placeholder="Jane Doe" className="input w-full" />
        </div>
  
        {/* Accent */}
        <div className="bg-accent text-accent-content p-4 rounded-lg">
          <label className="label">
            <span className="label-text text-accent-content">Accent Favorite Color</span>
          </label>
          <input type="text" placeholder="Mint" className="input w-full" />
        </div>
  
        {/* Neutral */}
        <div className="bg-neutral text-neutral-content p-4 rounded-lg">
          <label className="label">
            <span className="label-text text-neutral-content">Neutral Username</span>
          </label>
          <input type="text" placeholder="coolcat99" className="input w-full" />
        </div>
  
        {/* Base */}
        <div className="bg-base-200 p-4 rounded-lg">
          <label className="label">
            <span className="label-text">Base Bio</span>
          </label>
          <textarea className="textarea w-full" placeholder="Tell us something fun!" />
        </div>
  
        {/* Info */}
        <div className="border-l-4 border-info p-4 bg-info text-info-content rounded-lg">
          <p className="font-bold">Info Note</p>
          <p>This is an informational message inside the form.</p>
        </div>
  
        {/* Success */}
        <div className="border-l-4 border-success p-4 bg-success text-success-content rounded-lg">
          <p className="font-bold">Success</p>
          <p>Your profile has been saved!</p>
        </div>
  
        {/* Warning */}
        <div className="border-l-4 border-warning p-4 bg-warning text-warning-content rounded-lg">
          <p className="font-bold">Warning</p>
          <p>Your password is weak.</p>
        </div>
  
        {/* Error */}
        <div className="border-l-4 border-error p-4 bg-error text-error-content rounded-lg">
          <p className="font-bold">Error</p>
          <p>Something went wrong while submitting.</p>
        </div>
  
        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    );
  }
  