
# Differences from the source

## Already made

### index.d.ts

I changed the types of firstname and lastname in CreateUserParams and UpdateUserParams from string to string|null.

### .env.local

Modified NEXT_PUBLIC_AFTER_SIGN_IN_URL to NEXT_PUBLIC_SIGN_IN_FORCE_REDIRECT_URL

## PROBLEMS

### mongoose document _id type default unknown

deployment won't work on vercel
The node module changes won't be useful for actual deployment

**Solved**
I changed `Document` to `Document<any>` in image.model.ts.

### home

Complete breach of privacy by displaying everybody's images on the front page lmao
the hero page should be accessible without logging in
when signed in it should only show user's image
when signed out it should show images from sample folder

**Solved**
home page loads sample images when signedout
it loads the user images when signedin

### search

needs to be improved

**Solved**
added asterix and decreased debounce

### transformations

they are saved in our db but still when viewed in transformations/[id]/page.tsx, they are reapplied by using TransformedImage which is fucked up

Even when downloading getCldImageUrl again reapplies transformation.

### update

transformation is instantly applied as I change the aspect ratio
clicking on apply transformation keeps the spinner loading

**Solved**
newTransformation is also passed to the transformed image and only when it is null will the transformed image be evaluated

### transformations/[id]

/[id] should only be authorized to the author of the image

**Solved**
redirected to profile page if someone tries to do that

### transformation form

it has many inconsistencies.
Simple rule is that it should never allow to apply transformation until the image is uploaded
and it should never allow to be saved until everything is added
it should also show the toast each time the updateCredits is called

### tranformationURL not being used

### update image

update image should also show other transformation options for the image

### remove

Object remove doesn't work properly

### dark mode

no dark mode

### pagination

should not repeatedly use search api if the search query is not changing
