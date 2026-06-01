-- Run after schema.sql. Seeds the Malaysia honeymoon itinerary.

insert into activities (day_number, date, day_name, time, title, category, location, notes, position) values
-- Day 1 · Fri 12 Jun · Land + WFH
(1, '2026-06-12', 'Fri', '07:30', 'Land KUL', 'flight', 'Kuala Lumpur International Airport', 'BLR-KUL flight arrives', 0),
(1, '2026-06-12', 'Fri', '08:30', 'Grab to Lucentia Suites', 'transport', 'Jalan Pudu, KL', 'RM 80-100, ~1 hr', 1),
(1, '2026-06-12', 'Fri', '09:30', 'Drop bags at Lucentia front desk', 'lodging', 'Lucentia, Jalan Pudu', 'Check-in is 3 PM; message Wy via Airbnb for early entry', 2),
(1, '2026-06-12', 'Fri', '10:00', 'Breakfast at Pavilion KL', 'restaurant', 'Pavilion KL, Bukit Bintang', 'PappaRich or Toast Box', 3),
(1, '2026-06-12', 'Fri', '11:30', 'Find cafe wifi for WFH gap', 'work', 'VCR / Whisk Conservatory / Coffee Academics', 'Work from cafe until 3 PM check-in', 4),
(1, '2026-06-12', 'Fri', '13:30', 'WFH starts (IST 11 AM)', 'work', 'Cafe or apartment', '7-hour work block ends 8:30 PM MYT', 5),
(1, '2026-06-12', 'Fri', '15:00', 'Check in to Lucentia apartment', 'lodging', 'Lucentia Suites, Jalan Pudu', 'Set up VPN + plug adapter (Type-G)', 6),
(1, '2026-06-12', 'Fri', '20:30', 'WFH ends (IST 6 PM)', 'work', null, 'Shower + comfy clothes', 7),
(1, '2026-06-12', 'Fri', '21:00', 'Late dinner', 'restaurant', 'Jalan Alor / Lot 10 Hutong / Bar Trigona', 'Walking distance from Lucentia', 8),

-- Day 2 · Sat 13 Jun · KL Forest Eco Park + Chinatown
(2, '2026-06-13', 'Sat', '07:30', 'Breakfast at hotel', 'restaurant', 'Lucentia / nearby kopitiam', null, 0),
(2, '2026-06-13', 'Sat', '08:30', 'KL Forest Eco Park canopy walk', 'activity', 'Bukit Nanas', 'RM 40 foreigner. Closed Fridays.', 1),
(2, '2026-06-13', 'Sat', '11:00', 'Pool / spa break at Lucentia', 'activity', 'Lucentia 43rd floor', null, 2),
(2, '2026-06-13', 'Sat', '12:30', 'Lunch', 'restaurant', 'Lucentia / nearby', null, 3),
(2, '2026-06-13', 'Sat', '14:30', 'Sin Sze Si Ya Temple', 'activity', 'Chinatown', 'Oldest Taoist temple in KL (1864). 30 min.', 4),
(2, '2026-06-13', 'Sat', '15:15', 'Central Market stamp hunting', 'activity', 'Pasar Seni / Central Market', 'Pick up stamp passport at info desk', 5),
(2, '2026-06-13', 'Sat', '16:45', 'Kwai Chai Hong (Ghost Boy Alley)', 'activity', 'Lorong Panggung, Chinatown', 'Painted murals; best lit after 5 PM', 6),
(2, '2026-06-13', 'Sat', '17:15', 'Coffee — Jamboo Cafe / REXKL', 'restaurant', 'Petaling Street area', 'Pick one', 7),
(2, '2026-06-13', 'Sat', '18:00', 'Petaling Street market walk', 'activity', 'Jalan Petaling', 'Bargain to 30% of asking; don''t eat here', 8),
(2, '2026-06-13', 'Sat', '19:30', 'Jalan Alor dinner', 'restaurant', 'Bukit Bintang', 'Wong Ah Wah chicken wings, Sai Woo satay', 9),
(2, '2026-06-13', 'Sat', '21:00', 'Rizq Quesillo dessert', 'restaurant', 'Bukit Bintang', 'Venezuelan quesillo. RM 25 for two.', 10),

-- Day 3 · Sun 14 Jun · HOHO + Gardens + Thean Hou + Petronas
(3, '2026-06-14', 'Sun', '08:30', 'Breakfast', 'restaurant', 'Lucentia / nearby', null, 0),
(3, '2026-06-14', 'Sun', '10:00', 'KL Hop-On Hop-Off — Garden Route', 'tour', 'KLCC or Menara KL stop', 'RM 30 24-hr pass. Buy online.', 1),
(3, '2026-06-14', 'Sun', '11:00', 'Perdana Botanical Gardens', 'activity', 'Lake Gardens', 'Free, 7 AM-8 PM. Orchid + Hibiscus.', 2),
(3, '2026-06-14', 'Sun', '13:00', 'Lunch', 'restaurant', 'Hornbill Restaurant / Lot 10 Hutong', null, 3),
(3, '2026-06-14', 'Sun', '14:30', 'Grab to Thean Hou Temple', 'transport', 'Robson Heights', '~25 min, RM 18-25', 4),
(3, '2026-06-14', 'Sun', '15:00', 'Thean Hou Temple', 'activity', 'Robson Heights', '6-tier Chinese temple. Free. 1.5 hours.', 5),
(3, '2026-06-14', 'Sun', '17:00', 'Freshen up, smart casual', 'note', 'Lucentia', null, 6),
(3, '2026-06-14', 'Sun', '17:30', 'KLCC Park stroll', 'activity', 'KLCC', null, 7),
(3, '2026-06-14', 'Sun', '18:00', 'Petronas Towers Observation Deck', 'activity', 'KLCC, KL', 'Booked 6 PM slot, on deck during 7:25 PM sunset', 8),
(3, '2026-06-14', 'Sun', '20:00', 'Marini''s on 57 dinner', 'restaurant', 'Menara 3 Petronas, 57th floor', 'Booked 8 PM. Tower-facing window.', 9),

-- Day 4 · Mon 15 Jun · KL → Genting (Awana base)
(4, '2026-06-15', 'Mon', '08:00', 'Breakfast', 'restaurant', 'Lucentia / Pavilion', null, 0),
(4, '2026-06-15', 'Mon', '11:00', 'Pack, check out by noon', 'lodging', 'Lucentia', 'Take all luggage — not coming back', 1),
(4, '2026-06-15', 'Mon', '12:00', 'Grab to Resorts World Awana', 'transport', 'Genting Highlands', '~1 hr, RM 90-120', 2),
(4, '2026-06-15', 'Mon', '13:30', 'Check in to Resorts World Awana', 'lodging', 'Awana base, Genting', null, 3),
(4, '2026-06-15', 'Mon', '14:30', 'Late lunch at Awana', 'restaurant', 'Awana food court', null, 4),
(4, '2026-06-15', 'Mon', '16:00', 'Awana Skyway cable car UP', 'tour', 'Awana base', 'RM 18 glass-bottom gondola', 5),
(4, '2026-06-15', 'Mon', '16:30', 'Genting SkyWorlds / Skytropolis / shopping', 'activity', 'SkyAvenue, Genting top', 'Pick by weather', 6),
(4, '2026-06-15', 'Mon', '19:00', 'Dinner at SkyAvenue', 'restaurant', 'Genting top', null, 7),
(4, '2026-06-15', 'Mon', '21:00', 'Casino de Genting (optional)', 'activity', 'Genting top', 'Smart casual, passport required', 8),
(4, '2026-06-15', 'Mon', '22:30', 'Cable car back down', 'transport', 'To Awana base', null, 9),

-- Day 5 · Tue 16 Jun · Genting → Skyline Luge (Rawang) → Batu Caves → KL
(5, '2026-06-16', 'Tue', '07:30', 'Breakfast at Awana', 'restaurant', null, null, 0),
(5, '2026-06-16', 'Tue', '08:30', 'Cable car UP to Chin Swee', 'transport', 'Awana Skyway', null, 1),
(5, '2026-06-16', 'Tue', '08:45', 'Chin Swee Caves Temple', 'activity', 'Mid-station, Genting', 'Free, cliff-side views. 30 min.', 2),
(5, '2026-06-16', 'Tue', '09:15', 'Cable car back down + check out', 'lodging', 'Awana', null, 3),
(5, '2026-06-16', 'Tue', '09:45', 'Grab to Skyline Luge KL', 'transport', 'Gamuda Gardens, Sungai Buloh', '~35 min, RM 40-50', 4),
(5, '2026-06-16', 'Tue', '10:30', 'Skyline Luge Kuala Lumpur', 'activity', 'Persiaran Gamuda Gardens 1, Sungai Buloh', 'NOT at Genting. 4 tracks. Hyfly Zipline add-on available.', 5),
(5, '2026-06-16', 'Tue', '12:00', 'Lunch at Skyline Luge cafe', 'restaurant', null, null, 6),
(5, '2026-06-16', 'Tue', '12:45', 'Grab to Batu Caves', 'transport', null, '~25 min south, RM 30-40', 7),
(5, '2026-06-16', 'Tue', '13:15', 'Batu Caves', 'activity', 'Selangor', 'Dress modest (shoulders + knees). 272 rainbow steps.', 8),
(5, '2026-06-16', 'Tue', '14:45', 'South Indian thali lunch', 'restaurant', 'Saravana Bhavan Selayang / Sangeetha', null, 9),
(5, '2026-06-16', 'Tue', '16:15', 'Grab to KL hotel for night 16', 'transport', 'KL center', '⚠️ Confirm this is booked', 10),
(5, '2026-06-16', 'Tue', '17:30', 'GoKL Green Line to Pavilion', 'transport', 'KLCC → Pavilion', 'RM 1', 11),
(5, '2026-06-16', 'Tue', '18:00', 'Heli Lounge Bar (sunset)', 'activity', 'Menara KH, Bukit Bintang', '34th floor helipad. Smart casual. Sunset 7:25 PM.', 12),
(5, '2026-06-16', 'Tue', '20:30', 'Dewakan dinner', 'restaurant', 'Naza Tower, KLCC', 'Book 2 weeks ahead. Backup: Bijan.', 13),

-- Day 6 · Wed 17 Jun · KL → Perhentian Kecil (Seahorse)
(6, '2026-06-17', 'Wed', '08:00', 'Breakfast', 'restaurant', null, null, 0),
(6, '2026-06-17', 'Wed', '10:00', 'Grab to KUL', 'transport', null, '~1 hr, RM 90', 1),
(6, '2026-06-17', 'Wed', '11:00', 'Check in MH 1426', 'flight', 'KUL', null, 2),
(6, '2026-06-17', 'Wed', '13:05', 'Depart KUL → KBR', 'flight', null, 'MH 1426', 3),
(6, '2026-06-17', 'Wed', '14:10', 'Land Kota Bharu (KBR)', 'flight', null, null, 4),
(6, '2026-06-17', 'Wed', '14:45', 'Grab to Kuala Besut jetty', 'transport', null, '~1 hr, RM 80-90', 5),
(6, '2026-06-17', 'Wed', '16:00', 'Speedboat to Pulau Kecil', 'ferry', 'Kuala Besut → Long Beach Kecil', '30 min', 6),
(6, '2026-06-17', 'Wed', '17:00', 'Check in Seahorse Diver Guesthouse', 'lodging', 'Long Beach, Pulau Kecil', '2 nights here', 7),
(6, '2026-06-17', 'Wed', '18:30', 'Sunset dinner at Long Beach', 'restaurant', 'Pulau Kecil', null, 8),

-- Day 7 · Thu 18 Jun · Perhentian Kecil — snorkel + Long Beach
(7, '2026-06-18', 'Thu', '07:30', 'Breakfast', 'restaurant', 'Seahorse / Long Beach cafe', null, 0),
(7, '2026-06-18', 'Thu', '09:00', 'Half-day snorkel trip', 'activity', 'Kecil dive shop', 'RM 80. Shark Point → Turtle Beach → Coral Garden.', 1),
(7, '2026-06-18', 'Thu', '13:00', 'Lunch on Coral Bay side', 'restaurant', 'Pulau Kecil', null, 2),
(7, '2026-06-18', 'Thu', '15:00', 'Beach + free swim time', 'activity', 'Long Beach', null, 3),
(7, '2026-06-18', 'Thu', '17:30', 'Lighthouse trail walk', 'activity', 'Pulau Kecil', '45 min uphill, sunset view', 4),
(7, '2026-06-18', 'Thu', '19:30', 'Dinner — Mira''s / Ombak Dive', 'restaurant', 'Kecil', null, 5),

-- Day 8 · Fri 19 Jun · Kecil → Besar (Perhentian Island Resort / Tuna Bay)
(8, '2026-06-19', 'Fri', '09:00', 'Breakfast at Seahorse', 'restaurant', null, null, 0),
(8, '2026-06-19', 'Fri', '10:30', 'Check out Seahorse + pack', 'lodging', null, null, 1),
(8, '2026-06-19', 'Fri', '11:30', 'Inter-island water taxi to Besar', 'ferry', 'Kecil → Besar', 'Coordinate with resort', 2),
(8, '2026-06-19', 'Fri', '12:00', 'Check in Perhentian Island Resort / Tuna Bay', 'lodging', 'Pulau Besar', '2 nights here', 3),
(8, '2026-06-19', 'Fri', '13:30', 'Lunch + beach', 'restaurant', 'Resort', null, 4),
(8, '2026-06-19', 'Fri', '15:00', 'Discover Scuba Dive (optional)', 'activity', 'Resort dive centre', 'RM 280-350. No cert needed.', 5),
(8, '2026-06-19', 'Fri', '19:00', 'Sunset dinner at resort', 'restaurant', null, null, 6),

-- Day 9 · Sat 20 Jun · Perhentian Besar — lazy + turtles
(9, '2026-06-20', 'Sat', '08:00', 'Slow breakfast', 'restaurant', null, null, 0),
(9, '2026-06-20', 'Sat', '10:00', 'Kayak rental', 'activity', 'Resort beach', 'RM 20-30/hr', 1),
(9, '2026-06-20', 'Sat', '12:00', 'Lunch', 'restaurant', null, null, 2),
(9, '2026-06-20', 'Sat', '13:30', 'Spa massage (optional)', 'activity', 'Resort spa', '~RM 100', 3),
(9, '2026-06-20', 'Sat', '15:00', 'Beach reading + free swim', 'activity', null, null, 4),
(9, '2026-06-20', 'Sat', '18:00', 'Sunset cocktails at beach bar', 'restaurant', null, null, 5),
(9, '2026-06-20', 'Sat', '20:00', 'BBQ seafood dinner', 'restaurant', 'Resort', null, 6),
(9, '2026-06-20', 'Sat', '22:30', 'Turtle Beach visit', 'activity', 'North end of Besar', 'Resort guide ~RM 50. Nesting season. No flashlights.', 7),

-- Day 10 · Sun 21 Jun · Return
(10, '2026-06-21', 'Sun', '08:30', 'Last breakfast + swim', 'restaurant', null, null, 0),
(10, '2026-06-21', 'Sun', '11:30', 'Pack, settle bill', 'lodging', null, null, 1),
(10, '2026-06-21', 'Sun', '13:00', 'Speedboat back to Kuala Besut', 'ferry', null, '30 min', 2),
(10, '2026-06-21', 'Sun', '13:30', 'Grab to KBR airport', 'transport', null, null, 3),
(10, '2026-06-21', 'Sun', '14:30', 'Reach Kota Bharu Airport (KBR)', 'flight', null, null, 4),
(10, '2026-06-21', 'Sun', '16:30', 'Check in MH 1397', 'flight', null, null, 5),
(10, '2026-06-21', 'Sun', '18:25', 'Depart KBR → KUL (MH 1397)', 'flight', null, null, 6),
(10, '2026-06-21', 'Sun', '19:40', 'Land KUL', 'flight', null, null, 7),
(10, '2026-06-21', 'Sun', '22:00', 'Depart KUL → BLR (MH 192)', 'flight', null, null, 8),
(10, '2026-06-21', 'Sun', '23:45', 'Land Bengaluru — end of trip', 'flight', null, null, 9);
