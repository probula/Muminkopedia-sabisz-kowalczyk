## Characters Collection

| Field         | Type        | Required | Description                          |
|--------------|------------|----------|--------------------------------------|
| _id          | ObjectId   | Yes      | Unique character identifier          |
| name         | String     | Yes      | Character name                       |
| description  | String     | Yes      | Character description                |
| species      | String     | Yes      | Muminek, Miukk, Paszczak lub Inny    |
| isHibernating| Boolean    | Yes      | Czy postać śpi snem zimowym          |
| bestFriend   | ObjectId   | No       | Referencja do innego Character       |
| createdAt    | Date       | Yes      | Data utworzenia                      |
| updatedAt    | Date       | Yes      | Data aktualizacji                    |

---

## Artifacts Collection

| Field        | Type      | Required | Description                          |
|-------------|----------|----------|--------------------------------------|
| _id         | ObjectId | Yes      | Unique artifact identifier           |
| name        | String   | Yes      | Nazwa artefaktu                      |
| description | String   | Yes      | Opis właściwości                     |
| owner       | ObjectId | Yes      | Referencja do Character (_id)        |
| createdAt   | Date     | Yes      | Data utworzenia                      |
| updatedAt   | Date     | Yes      | Data aktualizacji                    |

---

## Relacje

- owner w Artifacts to ObjectId wskazujący na Characters._id
- jeden Character może mieć wiele Artifacts
- bestFriend to relacja Character → Character

---

## Endpointy

### Characters
POST   /api/characters  
GET    /api/characters  
GET    /api/characters/:id  
PUT    /api/characters/:id  
DELETE /api/characters/:id

### Artifacts
POST   /api/artifacts  
GET    /api/artifacts  
GET    /api/artifacts/:id  
PUT    /api/artifacts/:id  
DELETE /api/artifacts/:id  