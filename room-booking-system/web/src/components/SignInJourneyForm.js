import React from 'react'

function SignInJourneyForm({ onSignIn }) {
  return (
    <form className="form--signin"
      onSubmit={event => {
        event.preventDefault()
        const elements = event.target.elements
        const pws = elements.pws.value
        const id = elements.id.value
        onSignIn({ pws, id })
      }}
    >
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'代號'}
          <input type="pws" name="pws" className="form__input" required />
        </label>
      </div>
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'密碼'}
          <input type="id" name="id" className="form__input" required />
        </label>
      </div>
      <button className="button button__form--submit">確認</button>
    </form>
  )
}

export default SignInJourneyForm
