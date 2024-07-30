
# Differences from the source

## Already made

### index.d.ts

I changed the types of firstname and lastname in CreateUserParams and UpdateUserParams from string to string|null.

### .env.local

Modified NEXT_PUBLIC_AFTER_SIGN_IN_URL to NEXT_PUBLIC_SIGN_IN_FORCE_REDIRECT_URL

## Gonna make

### toasts

1 credit deducted toast should pop up when 1 credit is actually deducted, i.e., after the transformation and not after the upload

### form

save image should be disabled until title is added in the restore form
