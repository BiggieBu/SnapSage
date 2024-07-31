
# Differences from the source

## Already made

### index.d.ts

I changed the types of firstname and lastname in CreateUserParams and UpdateUserParams from string to string|null.

### .env.local

Modified NEXT_PUBLIC_AFTER_SIGN_IN_URL to NEXT_PUBLIC_SIGN_IN_FORCE_REDIRECT_URL

### (NODE MODULE CHANGE)mongoose->types->document.d.ts(this unfortunately would not reflect on deployment so gotta correct it)

default value of type _id was modified from unknown to any

## PROBLEMS

### toasts

1 credit deducted toast should pop up when 1 credit is actually deducted, i.e., after the transformation and not after the upload

### form

save image should be disabled until title is added in the restore form

### mongoose document _id type default unknown

deployment won't work on vercel
The node module changes won't be useful for actual deployment

#### Solved

I changed `Document` to `Document<any>` in image.model.ts.

### home

Complete breach of privacy by displaying everybody's images on the front page lmao
this is fucked up
the hero page should be accessible without logging in
when signed in it should only show user's image
when signed out it should show set of sample images
