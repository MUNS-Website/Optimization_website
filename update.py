import os

filepath = 'departments/OGN_TH/index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    if i == 119:
        new_lines.append('''        <!-- Card 1 -->
        <a href="activities/69/Activities_6.html" target="_blank" class="news-card">
          <div class="news-card-img-wrapper">
            <img src="img/PR/2569/aun_qa.jpg" alt="ข่าวกิจกรรม 1" class="news-card-img" onerror="this.src='../../img/placeholder.jpg'">
          </div>
          <div class="news-card-body">
            <div class="news-card-title">หลักสูตรพยาบาลศาสตรมหาบัณฑิต สาขาการผดุงครรภ์ได้รับการรับรอง AUN QA และรับ 2 รางวัลระดับนานาชาติ</div>
            <div class="news-card-footer">
              <span class="news-card-tag">กิจกรรม</span>
              <span>4 มิถุนายน 2569</span>
            </div>
          </div>
        </a>

        <!-- Card 2 -->
        <a href="activities/69/Activities_7.html" target="_blank" class="news-card">
          <div class="news-card-img-wrapper">
            <img src="img/PR/2569/no_tobacco.jpg" alt="ข่าวกิจกรรม 2" class="news-card-img" onerror="this.src='../../img/placeholder.jpg'">
          </div>
          <div class="news-card-body">
            <div class="news-card-title">ผศ.ดร.ฤดี ปุงบางกะดี่ เข้าร่วมพิธีเปิดงาน “ศิริราชรณรงค์วันงดสูบบุหรี่โลก ประจำปี 2569”</div>
            <div class="news-card-footer">
              <span class="news-card-tag">กิจกรรม</span>
              <span>28 พฤษภาคม 2569</span>
            </div>
          </div>
        </a>

        <!-- Card 3 -->
        <a href="activities/69/Activities_8.html" target="_blank" class="news-card">
          <div class="news-card-img-wrapper">
            <img src="img/PR/2569/conference.jpg" alt="ข่าวกิจกรรม 3" class="news-card-img" onerror="this.src='../../img/placeholder.jpg'">
          </div>
          <div class="news-card-body">
            <div class="news-card-title">คณะฯ ร่วมเป็นเจ้าภาพจัดประชุมวิชาการนานาชาติ The 6th International Nursing Conference</div>
            <div class="news-card-footer">
              <span class="news-card-tag">กิจกรรม</span>
              <span>27 พฤษภาคม 2569</span>
            </div>
          </div>
        </a>

        <!-- Card 4 -->
        <a href="activities/69/Activities_10.html" target="_blank" class="news-card">
          <div class="news-card-img-wrapper">
            <img src="img/PR/2569/research_pub.jpg" alt="ข่าวกิจกรรม 4" class="news-card-img" onerror="this.src='../../img/placeholder.jpg'">
          </div>
          <div class="news-card-body">
            <div class="news-card-title">ขอแสดงความยินดีกับ รศ.ดร.ศศิธารา น่วมภา และ อ.ดร.มนัสวีร์ ศรีมรกต ในการตีพิมพ์ผลงานวิจัยระดับนานาชาติ Q1 Top 10</div>
            <div class="news-card-footer">
              <span class="news-card-tag">กิจกรรม</span>
              <span>พฤษภาคม 2569</span>
            </div>
          </div>
        </a>\n''')
    elif i > 119 and i <= 173:
        pass
    else:
        new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

